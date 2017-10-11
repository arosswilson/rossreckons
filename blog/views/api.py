from blog.services import api
from django.http import JsonResponse
import logging

logger = logging.getLogger(__name__)

def list_posts(request):
    params = _extract_params(request)
    return JsonResponse(api.list_posts(**params))


def get_post(request, post_id):
    params = _extract_params(request)
    return JsonResponse(api.get_post(post_id, **params))


def _extract_params(request, method='GET'):
    params = request.GET.dict() if method == 'GET' else request.POST.dict()
    params['requestor'] = request.user
    return params

# def json_handler(obj):
#     if hasattr(obj, 'isoformat'):
#         return obj.isoformat()
#     elif isinstance(obj, datetime):
#         return obj.isoformat()
#     elif isinstance(obj, Decimal):
#         return str(obj)
#     else:
#         raise TypeError('Object of type %s with value of %s is not JSON serializable' % (type(obj), repr(obj)))