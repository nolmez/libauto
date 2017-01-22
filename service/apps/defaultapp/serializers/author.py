from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import Author


class AuthorSerializer(ModelSerializer):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)

    class Meta:
        model = Author
        fields = (
            'id',
            'first_name',
            'last_name'
        )
