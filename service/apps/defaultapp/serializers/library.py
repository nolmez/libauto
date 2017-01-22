from rest_framework.serializers import ModelSerializer, CharField

from apps.defaultapp.models import Library


class LibrarySerializer(ModelSerializer):
    name = CharField(max_length=100)

    class Meta:
        model = Library
        fields = (
            'id',
            'name',
        )
