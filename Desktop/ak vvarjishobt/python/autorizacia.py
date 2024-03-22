authorized = False

while authorized != True:
    user_input = input("Please enter a password: ")

    if len(user_input) > 7:
        user_input2 = input("Please confirm a password: ")
        if user_input2 == user_input:
            print("You have successfully registered.")
            authorized = True
        else:
            print("Passwords do not match.")
    else:
        print("Your password should contain at least 8 characters.")
