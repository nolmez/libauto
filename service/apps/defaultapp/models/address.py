from django.db import models
from django.db.models.fields import CharField


class Address(models.Model):
    address = CharField(max_length=100)
    city = CharField(max_length=100)
    state = CharField(max_length=100)
    country = CharField(max_length=100)
    zip_code = CharField(max_length=100)

    class Meta:
        db_table = 'address'
