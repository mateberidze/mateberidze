def celsius_to_fahrenheit(celsius):
    return celsius * 9/5 + 32

celsius = float(input(f"please enter temperature in celsius:"))
print(f"temperature in celsius:", celsius_to_fahrenheit(celsius))