require 'rest-client'

module EmployeeHelper

  def create_employee(url, payload ,accept)
    begin
      return RestClient.post url, payload, {accept: :json}
    rescue => e
      return e.response
    end
  end
  
  def employee_with_id(url, accept)
    begin
      return RestClient.get url, {accept: :json}
    rescue => e
      return e.response
    end
  end

  def delete_employee(url, accept)
    begin
      return RestClient.delete url, {accept: :json}
    rescue => e
      return e.response
    end
  end

end