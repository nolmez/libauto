from rest_framework.relations import PrimaryKeyRelatedField


class PrimaryKeyRelatedFieldWithSerialization(PrimaryKeyRelatedField):

    def __init__(self, **kwargs):
        self._serializer_class = kwargs.pop('serializer_class', None)
        super(PrimaryKeyRelatedFieldWithSerialization, self).__init__(**kwargs)

    def use_pk_only_optimization(self):
        return not bool(self._serializer_class)

    def to_representation(self, obj):
        if self._serializer_class:
            data = self._serializer_class(obj).data
        else:
            data = super(PrimaryKeyRelatedFieldWithSerialization, self).to_representation(obj)
        return data
