from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import Book
from apps.defaultapp.serializers.book import BookSerializer


class BookViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = Book.objects.all()
    serializer_class = BookSerializer
    # permission_classes = [permissions.IsAdminUser]
