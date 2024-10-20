Feature: Negative Single Save
Background:
    Given the admin is login using username , 
    password
    And the admin is on the kwentra loyalty page URL
    #Later to add dynamic tenant_id


# Scenario Outline: Display a validation error message against the field left empty when all other fields are filled with valid data
#     When the admin fills the From Date with "<from_date>"
#     And the admin fills the To Date with "<to_date>"
#     And the admin fills the Points field with "<points>"
#     And the admin fills the Amount with "<amount>"
#     And the admin fills the Department field with "<department>" 
#     And The admin clicks on the first item at the visibile auto complete search result list    
#     And the admin clicks on the Save button
#     Then error message says "This field is required." displayed against the field left empty "<field>" 
# Examples:
#     | from_date  | to_date     | amount | points | department            | field       |
#     |            | 2024-12-31  | 100    | 50     | 324234                | fromDate    |
#     | 2024-01-01 |             | 100    | 50     | 324234                | toDate      |
#     | 2024-01-01 | 2024-12-31  |        | 50     | 324234                | amount      | 
#     | 2024-01-01 | 2024-12-31  | 100    |        | 324234                | points      |
#     | 2024-01-01 | 2024-12-31  | 100    | 50     |                       | departments |


# Scenario Outline: Display a validation error message when negative value is entered for 'Amount' and all other fields are invalidr 'Amount' and all other fields are invalid 
#     When the admin fills the From Date with "< from_date>"
#     And the admin fills the To Date with "<to_date>"
#     And the admin fills the Points field with "<points>"
#     And the admin fills the Department field with "<department>" 
#     And the admin fills the Amount with "<amount>"
#     And the admin clicks on the Save button
#     Then a native JavaScript error message saying "Value must be greater than or equal to 0." should be displayed against the Amount field only if it has a negative value
# Examples:
#     | from_date                | to_date                 | points  | department            | amount |
#     | 2024-10-11               | 2024-10-10              | -10     | Typing with no select | -100   |
#     | 2024-10-11               | 2024-10-15              | 0       | Typing with no select | -50    |
#     | not-actual-date-format   | valid                   | -5      | Typing with no select | -200   |
#     | valid                    | end-before-start        | 0       | Typing with no select | -1     |


# Scenario: Display a validation error message when End date is before the Start date and all other fields are filled with valid 
#     When the admin fills the From Date with "2024-10-11"
#     And the admin fills the To Date with "2024-10-10" 
#     And the admin fills the Amount with "1000"
#     And the admin fills the Points field with "100"
#     And the admin fills the Department field with "324234" 
#     And The admin clicks on the first item at the visibile auto complete search result list  
#     And the admin clicks on the Save button
#     # Then error message says "To date should be after from date." should be diplayed against the To Date field
#     Then error message says "To date should be after from date." displayed against the field left empty "to_date" 

# Scenario: Display a validation error message when 0 value are entered for 'points' field and all other fields are filled with valid 
#     When the admin fills the From Date with "2024-10-11"
#     And the admin fills the To Date with "2024-10-12"
#     And the admin fills the Points field with "0" 
#     And the admin fills the Amount with "100"
#     And the admin fills the Department field with "324234" 
#     And The admin clicks on the first item at the visibile auto complete search result list   
#     And the admin clicks on the Save button
#     Then error message says "Points should be greater than 0." should be diplayed against the Points field
