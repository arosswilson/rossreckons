from blog.services import api
from django.http import JsonResponse

def list_posts(request):
    params = _extract_params(request)
    response = JsonResponse(api.list_posts(**params))
    return response


def _extract_params(request, method='GET'):
    params = request.GET.dict() if method == 'GET' else request.POST.dict()
    params['requestor'] = request.user
    return params

def json_handler(obj):
    if hasattr(obj, 'isoformat'):
        return obj.isoformat()
    elif isinstance(obj, datetime):
        return obj.isoformat()
    elif isinstance(obj, Decimal):
        return str(obj)
    else:
        raise TypeError('Object of type %s with value of %s is not JSON serializable' % (type(obj), repr(obj)))