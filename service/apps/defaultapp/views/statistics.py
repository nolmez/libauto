from rest_framework.response import Response
from rest_framework.viewsets import ModelViewSet

from apps.defaultapp.models import Book
from apps.defaultapp.models import CategoryBasedBookCounts
from apps.defaultapp.models import PublishingHouseBasedBookCounts
from apps.defaultapp.serializers.statistics import CategoryBasedBookCountsSerializer, \
    PublishingHouseBasedBookCountsSerializer


class CategoryBasedBookCountsViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = CategoryBasedBookCounts.objects.all()
    serializer_class = CategoryBasedBookCountsSerializer
    # permission_classes = [permissions.IsAdminUser]

    def list(self, request, *args, **kwargs):
        book_counts = Book.objects.all().count()
        instance = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_pagination_serializer(page)
        else:
            serializer = self.get_serializer(instance, many=True)
        obj = {'total_books_count': book_counts, 'category_books': serializer.data}
        return Response(obj)


class PublishingHouseBasedBookCountsViewSet(ModelViewSet):
    # authentication_classes = (SessionAuthentication, TokenAuthentication,)
    queryset = PublishingHouseBasedBookCounts.objects.all()
    serializer_class = PublishingHouseBasedBookCountsSerializer
    # permission_classes = [permissions.IsAdminUser]

    def list(self, request, *args, **kwargs):
        book_counts = Book.objects.all().count()
        instance = self.filter_queryset(self.get_queryset())
        page = self.paginate_queryset(instance)
        if page is not None:
            serializer = self.get_pagination_serializer(page)
        else:
            serializer = self.get_serializer(instance, many=True)
        obj = {'total_books_count': book_counts, 'publishing_house_books': serializer.data}
        return Response(obj)
