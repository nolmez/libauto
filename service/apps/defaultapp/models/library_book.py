from django.db import models
from django.db.models import ForeignKey
from django.db.models.fields import IntegerField

from apps.defaultapp.models import Book
from apps.defaultapp.models import Library


class LibraryBook(models.Model):
    book = ForeignKey(Book)
    library = ForeignKey(Library)
    count = IntegerField()

    class Meta:
        db_table = 'library_book'
