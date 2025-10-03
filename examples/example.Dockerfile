ARG PNPM_VERSION=10.18.0

FROM node:22-alpine AS base

ENV \
  NODE_ENV=production \
  CI=1 \
  PNPM_VERSION=$PNPM_VERSION \
  TURBO_TELEMETRY_DISABLED=1 \
  NEXT_TELEMETRY_DISABLED=1


FROM base AS dev

ENV PNPM_VERSION=$PNPM_VERSION

RUN apk update \
  && apk add --no-cache libc6-compat

RUN corepack enable \
  && corepack prepare pnpm@$PNPM_VERSION --activate \
  && echo "Using pnpm version: $(pnpm -v)"


FROM dev AS builder

WORKDIR /app

COPY ./out/json ./

RUN pnpm install --prefer-offline --frozen-lockfile

COPY ./out/full ./

RUN --mount=type=cache,target=/app/apps/webapp/.next/cache \
  pnpm turbo run build


FROM base AS runner

WORKDIR /app

ENV \
  USER=nextjs \
  GROUP=nodejs \
  OWNER=nextjs:nodejs

RUN addgroup --system --gid 1001 $GROUP \
  && adduser --system --uid 1001 $USER

USER $USER

COPY --from=builder --chown=$OWNER /app/apps/webapp/.next/standalone ./
COPY --from=builder --chown=$OWNER /app/apps/webapp/.next/static ./apps/webapp/.next/static
COPY --from=builder --chown=$OWNER /app/apps/webapp/public ./apps/webapp/public

EXPOSE 3000

CMD ["node", "apps/webapp/server.js"]
