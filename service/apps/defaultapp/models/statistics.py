from django.db import models
from django.db.models import IntegerField, CharField


class CategoryBasedBookCounts(models.Model):
    name = CharField(max_length=200)
    book_counts = CharField(max_length=10)

    class Meta:
        db_table = 'view_category_based_book_counts'
        managed = False
