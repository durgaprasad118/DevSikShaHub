## Updating the profile of Admin
- define the slice of useMutation in which headers are present 
- create a form which accepts the admin name and password ( validations included in the backend)
- create a submitHandler and on submitting updateDetails(the updatign slice)
- if updated succesfully 
  - logout from using the dispatch action logout logic
  - and navigate to home page
## updating the course page
- keep the course card and update course card on side by sidde
- get the details of the course and set the initial values using em
- and in the bottom of the card delete (from the modal) and update course 



## navbar 
- sticky to avoid the below divs going below it


## dark mode 
- navbar colors fixed
- used flowbite for darkmode



## Login and Register
- toasts
  - after isSuccess instead of directly navigating
  - use setTimeout to see the toast 
  - if errror we see the error toasts



## getting admin Name on course card
- i have admin Id so 
  - a route which gets the name of the user using the id
- MOST IMP _ while getting the data use the data only after **isSuccess or !isLoading**