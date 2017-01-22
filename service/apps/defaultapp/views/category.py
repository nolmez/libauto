from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Category
from apps.defaultapp.serializers.category import CategorySerializer


class CategoryViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Category.objects.all()
    serializer_class = CategorySerializer
    # permission_classes = [permissions.IsAdminUser]
