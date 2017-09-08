from django.shortcuts import render
from blog.models import *
import logging

logger = logging.getLogger(__name__)


def list_posts(**kwargs):
    limit = int(kwargs.get('limit', 100))
    offset = int(kwargs.get('offset', 0))
    posts = Post.objects.all()
    count = posts.count()
    posts = [get_post(post) for post in posts[offset:offset+limit]]

    data = {
        'posts': posts,
        'count': count,
    }

    return data


def get_post(ref, **kwargs):
    post = Post.find(ref)

    data = {
        'id': post.id,
        'create_date': post.create_date,
        'modify_date': post.modify_date,
        'name':post.name,
        'is_deleted': post.is_deleted,
        'body': post.body,
        'published_date': post.publish_date,
        'published': post.published,
        'views': post.views,
        'slug': post.slug,
        'image': post.image,
    }

    data['tags'] = [get_tag(tag) for tag in post.tags.all()]

    return data


def get_tag(ref, **kwargs):
    tag = PostTag.find(ref)

    data = {
        'id': tag.id,
        'create_date': tag.create_date,
        'modify_date': tag.modify_date,
        'name': tag.name,
        'is_deleted': tag.is_deleted,
        'slug': tag.slug,
        'image': tag.image,
    }
    return data
