from rest_framework.serializers import ModelSerializer, CharField, IntegerField
from apps.defaultapp.models import CategoryBasedBookCounts


class CategoryBasedBookCountsSerializer(ModelSerializer):
    name = CharField(max_length=200)
    book_counts = IntegerField

    class Meta:
        model = CategoryBasedBookCounts
        fields = (
            'name',
            'book_counts'
        )
