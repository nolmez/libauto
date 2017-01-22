from rest_framework.serializers import ModelSerializer
from apps.defaultapp.models import Book
from apps.defaultapp.models import Library
from apps.defaultapp.models import LibraryBook
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.book import BookSerializer
from apps.defaultapp.serializers.library import LibrarySerializer


class LibraryBookSerializer(ModelSerializer):
    book = PrimaryKeyRelatedFieldWithSerialization(queryset=Book.objects.all(),
                                                   serializer_class=BookSerializer)
    library = PrimaryKeyRelatedFieldWithSerialization(queryset=Library.objects.all(),
                                                      serializer_class=LibrarySerializer)

    class Meta:
        model = LibraryBook
        fields = (
            'id',
            'book',
            'library',
            'count'
        )
