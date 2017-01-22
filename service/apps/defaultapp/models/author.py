from django.db import models
from django.db.models.fields import CharField


class Author(models.Model):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    email = CharField(max_length=100, null=True, blank=True)
    phone_number = CharField(max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'author'
