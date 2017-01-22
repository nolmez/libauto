from django.db import models
from django.db.models.fields import CharField


class Library(models.Model):
    name = CharField(max_length=100, unique=True)

    class Meta:
        db_table = 'library'
