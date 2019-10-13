require 'spec_helper'
require 'json'

file = File.read('./spec/support/test_data/employee.json')
payload = JSON.parse(file)

include EmployeeHelper
url = 'http://dummy.restapiexample.com/api/v1/'


describe('Employee:') do

  it('Create an employee') do
    response = EmployeeHelper.create_employee(url+'create', payload, :json)
    $emp = 345
    # $emp = response.body.id.to_s
    expect(response.code).to be(200)
  end

  it('View employee with ID') do
    response = EmployeeHelper.employee_with_id(url+"employee/"+$emp.to_s, :json)
    expect(response.code).to be(200)
  end 

  it('Delete employee') do
    response = EmployeeHelper.delete_employee(url+"delete/"+$emp.to_s, :json)
    expect(response.code).to be(200)
  end

end