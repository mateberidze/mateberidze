
num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))


print("Numbers between", num1, "and", num2, "are:")
for i in range(num1, num2 + 1):
    print(i, end=" ")




num1 = int(input("Enter the first number: "))
num2 = int(input("Enter the second number: "))


print("Numbers between", num1, "and", num2, "are:")
sum_of_numbers = 0
for i in range(num1, num2 + 1):
    print(i, end=" ")
    sum_of_numbers += i


print("\nThe sum of numbers between", num1, "and", num2, "is:", sum_of_numbers)



print("Numbers from 1 to 10 and their squares:")
for i in range(1, 11):
    square = i ** 2
    print(f"{i} squared is {square}")
