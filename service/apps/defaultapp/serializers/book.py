from rest_framework.serializers import ModelSerializer, CharField, IntegerField
from apps.defaultapp.models import Author
from apps.defaultapp.models import Book
from apps.defaultapp.models import Category
from apps.defaultapp.models import PublishingHouse
from apps.defaultapp.serializers import PrimaryKeyRelatedFieldWithSerialization
from apps.defaultapp.serializers.author import AuthorSerializer
from apps.defaultapp.serializers.category import CategorySerializer
from apps.defaultapp.serializers.publishing_house import PublishingHouseSerializer


class BookSerializer(ModelSerializer):
    name = CharField(max_length=100)
    publication_year = IntegerField()
    isbn = CharField(max_length=50)
    number_of_pages = IntegerField()
    authors = PrimaryKeyRelatedFieldWithSerialization(queryset=Author.objects.all(),
                                                      serializer_class=AuthorSerializer,
                                                      many=True)
    categories = PrimaryKeyRelatedFieldWithSerialization(queryset=Category.objects.all(),
                                                         serializer_class=CategorySerializer,
                                                         many=True)
    publishing_house = PrimaryKeyRelatedFieldWithSerialization(queryset=PublishingHouse.objects.all(),
                                                               serializer_class=PublishingHouseSerializer)

    class Meta:
        model = Book
        depth = 1
        fields = (
            'id',
            'name',
            'publication_year',
            'isbn',
            'number_of_pages',
            'authors',
            'categories',
            'publishing_house'
        )
