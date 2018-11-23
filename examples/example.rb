module FooModule
  class PeopleController < ActionController::Base
    # This will raise an ActiveModel::ForbiddenAttributesError exception
    # because it's using mass assignment without an explicit permit
    # step.
    def create
      Person.create(params[:person])
    end

    # This will pass with flying colors as long as there's a person key
    # in the parameters, otherwise it'll raise a
    # ActionController::ParameterMissing exception, which will get
    # caught by ActionController::Base and turned into a 400 Bad
    # Request error.
    def update
      person = current_account.people.find(params[:id])
      person.update!(person_params)
      redirect_to person
    end

    private
      # Using a private method to encapsulate the permissible parameters
      # is just a good pattern since you'll be able to reuse the same
      # permit list between create and update. Also, you can specialize
      # this method with per-user checking of permissible attributes.
      def person_params
        params.require(:person).permit(:name, :age)
      end
  end
end
