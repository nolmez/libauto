from rest_framework.viewsets import ModelViewSet
from apps.defaultapp.models import LibraryBook
from apps.defaultapp.serializers.library_book import LibraryBookSerializer


class LibraryBookViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = LibraryBook.objects.all()
    serializer_class = LibraryBookSerializer
    # permission_classes = [permissions.IsAdminUser]
