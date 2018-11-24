import config from './config';
import { mapTokensByKey } from './utils';

const tokens = {
  neutralMedium: [
    'meta',
    'keyword.control.import',
    'keyword.control.from',
    'keyword.control.export',
    'keyword.control.default',
    'support.type.property-name.css',
    'support.function.misc.css'
  ],
  neutralSilver: [],
  neutralLight: [
    'comment',
    'keyword.operator',
    // 'meta.object-literal.key',
    'punctuation',
    'meta.brace',
    'storage.modifier'
  ],
  neutralDark: [
    'meta.import variable',
    'meta.export variable',
    'meta.export.default',
    'meta.definition.function',
    'meta.object.member',
    'entity.name.function',
    'entity.name.type.class',
    'variable.other.constant',
    'source.ruby entity.other.inherited-class',
    'support.constant.property-value',
    'constant.other.color',
    'meta.tag.attributes variable'
  ],
  green: ['string'],
  purple: [
    'storage.type',
    'meta.function',
    'source.ruby keyword.other.special-method',
    'entity.other.attribute-name.id.css',
    'entity.other.attribute-name.class.css'
  ],
  red: [
    'keyword.operator.expression',
    'support.class.component',
    'entity.name.tag',
    'source.ruby entity.name.type.class'
  ],
  blue: ['meta.function-call entity.name.function', 'keyword.control'],
  yellow: [
    'support.variable.dom',
    'support.class.console',
    'support.function.console',
    'storage.type.class'
  ],
  navy: ['constant.numeric'],
  orange: []
};

export default mapTokensByKey(tokens, config.colors);
