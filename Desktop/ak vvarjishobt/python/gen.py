from python import Faker
fake = Faker({'ru_RU'})

print("name:",fake.name())
print(":email:",fake.email())
print(":password:",fake.password())
print("address:",fake.address())
print("city:",fake.city())