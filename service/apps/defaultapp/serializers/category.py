from rest_framework.serializers import ModelSerializer, CharField
from apps.defaultapp.models import Category


class CategorySerializer(ModelSerializer):
    name = CharField(max_length=100)

    class Meta:
        model = Category
        fields = (
            'id',
            'name'
        )
