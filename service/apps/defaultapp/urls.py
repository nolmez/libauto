from django.contrib import admin
from django.conf.urls import include, url
from rest_framework.routers import DefaultRouter

from apps.defaultapp.views.address import AddressViewSet
from apps.defaultapp.views.author import AuthorViewSet
from apps.defaultapp.views.book import BookViewSet
from apps.defaultapp.views.category import CategoryViewSet
from apps.defaultapp.views.library import LibraryViewSet
from apps.defaultapp.views.library_book import LibraryBookViewSet
from apps.defaultapp.views.member import MemberViewSet
from apps.defaultapp.views.publishing_house import PublishingHouseViewSet
from apps.defaultapp.views.statistics import CategoryBasedBookCountsViewSet, PublishingHouseBasedBookCountsViewSet

router = DefaultRouter()
router.register(r'book', BookViewSet, base_name='book-view')
router.register(r'author', AuthorViewSet, base_name='author-view')
router.register(r'category', CategoryViewSet, base_name='category-view')
router.register(r'address', AddressViewSet, base_name='address-view')
router.register(r'member', MemberViewSet, base_name='user-view')
router.register(r'publishing_house', PublishingHouseViewSet, base_name='publishing_house-view')
router.register(r'library', LibraryViewSet, base_name='library-view')
router.register(r'library_book', LibraryBookViewSet, base_name='library_book-view')
router.register(r'category_based_book_counts', CategoryBasedBookCountsViewSet, base_name='category_based_book_counts-view')
router.register(r'publishing_house_based_book_counts', PublishingHouseBasedBookCountsViewSet, base_name='publishing_house_based_book_counts-view')

urlpatterns = [
    # url(r'^admin/', include(admin.site.urls))
    # url(r'api/', include('drf.urls', namespace='drf')),
    url(r'^api/', include(router.get_urls())),
]
