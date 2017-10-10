from django.db.models import *

# Create your models here.


class BaseModel(Model):
    create_date = DateTimeField(auto_now_add=True)
    modify_date = DateTimeField(auto_now=True)

    class Meta:
        abstract = True

    def __str__(self):
        return "<%s:%s>" % (self.__class__.__name__, self.pk)

    @classmethod
    def find(cls, ref, must_exist=True, default=None, ignore_refs=['', None]):
        if ref in ignore_refs:
            return default

        if isinstance(ref, cls):
            return ref
        elif isinstance(ref, int) or isinstance(ref, str):
            try:
                return cls.objects.get(pk=ref)
            except cls.DoesNotExist as ex:
                if must_exist:
                    raise
        else:
            raise UnsupportedType("{} {}".format(ref.__class__, ref))


class ObjectModel(BaseModel):
    name = CharField(max_length=200)
    is_deleted = BooleanField(default=False)

    class Meta:
        abstract = True

    def __str__(self):
        return self.name


class ContactMessage(BaseModel):
    first_name = CharField(max_length=50)
    last_name = CharField(max_length=100)
    email = EmailField()
    message = TextField()

    class Meta:
        db_table = 'contact_message'
        verbose_name = 'Contact Message'


class Post(ObjectModel):
    body = TextField(null=True, blank=True, help_text="*** Be careful pasting from Word.")
    publish_date = DateField(null=True, blank=True)
    published = BooleanField(default=False)
    has_emailed = BooleanField(default=False)
    views = IntegerField(null=True, blank=True)
    slug = CharField(max_length=100, null=True, blank=True, unique=True, help_text='all lowercase, dashes and no spaces!')
    image = CharField(max_length=100, null=True, blank=True)
    tags = ManyToManyField('PostTag', blank=True, db_table='post_tag_map')

    class Meta:
        db_table = 'post'
        verbose_name = 'Post'


class PostTag(ObjectModel):
    slug = CharField(max_length=100, null=True, blank=True, unique=True, help_text='all lowercase, dashes and no spaces!')
    image = CharField(max_length=100, null=True, blank=True)

    class Meta:
        db_table = 'post_tag'
        verbose_name = 'Post Tag'