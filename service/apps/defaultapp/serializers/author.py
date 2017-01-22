from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import Author


class AuthorSerializer(ModelSerializer):
    first_name = CharField(max_length=100)
    last_name = CharField(max_length=100)
    email = CharField(max_length=100, allow_null=True, allow_blank=True)
    phone_number = CharField(max_length=100, allow_null=True, allow_blank=True)

    class Meta:
        model = Author
        fields = (
            'id',
            'first_name',
            'last_name',
            'email',
            'phone_number'
        )
