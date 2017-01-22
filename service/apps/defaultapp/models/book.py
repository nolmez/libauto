from django.db import models
from django.db.models import ForeignKey
from django.db.models.fields import IntegerField, CharField, DateField


class Book(models.Model):
    name = CharField(max_length=100)
    publication_year = IntegerField()
    number_of_pages = IntegerField()
    isbn = CharField(max_length=50, unique=True)
    categories = models.ManyToManyField('Category')
    publishing_house = ForeignKey('PublishingHouse')
    authors = models.ManyToManyField('Author')

    class Meta:
        db_table = 'book'
