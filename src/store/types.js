//App
export const POST_APP_CREATE_URL = '/api/v1/app-create';
export const POST_APP_CREATE = 'POST_APP_CREATE';
export const POST_APP_CREATE_ERROR = 'POST_APP_CREATE_ERROR';

export const GET_APP_LISTING_URL = '/api/v1/app-listing';
export const GET_APP_LISTING = 'GET_APP_LISTING';
export const GET_APP_LISTING_ERROR = 'GET_APP_LISTING_ERROR';

export const GET_APP_DETAIL_URL = '/api/v1/apps/:app_id/detail';
export const GET_APP_DETAIL = 'GET_APP_DETAIL';
export const GET_APP_DETAIL_ERROR = 'GET_APP  _DETAIL_ERROR';

export const UPDATE_APP_URL = '/api/v1/apps/:id/update';
export const UPDATE_APP = 'UPDATE_APP';
export const UPDATE_APP_ERROR = 'UPDATE_APP_ERROR';

export const DELETE_APP_URL = '/api/v1/apps/:id/';
export const DELETE_APP = 'DELETE_APP';
export const DELETE_APP_ERROR = 'DELETE_APP_ERROR';

//Client Tansaction
export const GET_CLIENT_TRANSACTIONS_URL = '/api/v1/client-transactions';
export const GET_CLIENT_TRANSACTIONS = 'GET_CLIENT_TRANSACTIONS';
export const GET_CLIENT_TRANSACTIONS_ERROR = 'GET_CLIENT_TRANSACTIONS_ERROR';

export const GET_CLIENT_TRANSACTIONS_PAGINATION_URL = '/api/v1/client-transactions?page=';
export const GET_CLIENT_TRANSACTIONS_PAGINATION = 'GET_CLIENT_TRANSACTIONS_PAGINATION';
export const GET_CLIENT_TRANSACTIONS_PAGINATION_ERROR = 'GET_CLIENT_TRANSACTIONS_PAGINATION_ERROR';


export const GET_CLIENT_TRANSACTIONS_DETAIL_URL = '/api/v1/client-transactions/:invoice_no';
export const GET_CLIENT_TRANSACTIONS_DETAIL = 'GET_CLIENT_TRANSACTIONS_DETAIL';
export const GET_CLIENT_TRANSACTIONS_DETAIL_ERROR = 'GET_CLIENT_TRANSACTIONS_DETAIL_ERROR';

//Category
export const GET_APP_CATEGORIES_URL = '/api/v1/app-categories';
export const GET_APP_CATEGORIES = 'GET_APP_CATEGORIES';
export const GET_APP_CATEGORIES_ERROR = 'GET_APP_CATEGORIES_ERROR';

//Payment
export const GET_APP_PAYMENTS_URL = '/api/v1/payment-types';
export const GET_APP_PAYMENTS = 'GET_APP_PAYMENTS';
export const GET_APP_PAYMENTS_ERROR = 'GET_APP_PAYMENTS_ERROR';

//With-Draw
export const GET_WITH_DRAW_LIST_URL = '/api/v1/withdraws'
export const GET_WITH_DRAW_LIST = 'GET_WITH_DRAW_LIST'
export const GET_WITH_DRAW_LIST_ERROR = 'GET_WITH_DRAW_LIST_ERROR'

export const GET_WITH_DRAW_LIST_PAGINATION_URL = '/api/v1/withdraws'
export const GET_WITH_DRAW_LIST_PAGINATION = 'GET_WITH_DRAW_LIST_PAGINATION'
export const GET_WITH_DRAW_LIST_PAGINATION_ERROR = 'GET_WITH_DRAW_LIST_PAGINATION_ERROR'

export const GET_WITH_DRAW_DETAIL_URL = '/api/v1/withdraws/:id'
export const GET_WITH_DRAW_DETAIL = 'GET_WITH_DRAW_DETAIL'
export const GET_WITH_DRAW_DETAIL_ERROR = 'GET_WITH_DRAW_DETAIL_ERROR'

export const GET_WITH_DRAW_TRANSACTIONS_LIST_URL = '/api/v1/withdraws/:id/transactions'
export const GET_WITH_DRAW_TRANSACTIONS_LIST = 'GET_WITH_DRAW_TRANSACTIONS_LIST'
export const GET_WITH_DRAW_TRANSACTIONS_LIST_ERROR = 'GET_WITH_DRAW_TRANSACTIONS_LIST_ERROR'

export const POST_WITH_DRAW_CLOSE_URL = '/api/v1/withdraws/:id/close'
export const POST_WITH_DRAW_CLOSE = 'POST_WITH_DRAW_CLOSE'
export const POST_WITH_DRAW_CLOSE_ERROR = 'POST_WITH_DRAW_CLOSE_ERROR'

//Issue-Tracker
export const GET_ISSUES_LIST_URL = '/api/v1/issues'
export const GET_ISSUES_LIST = 'GET_ISSUES_LIST'
export const GET_ISSUES_LIST_ERROR = 'GET_ISSUES_LIST_ERROR'

export const POST_ISSUES_CREATE_URL = '/api/v1/issues'
export const POST_ISSUES_CREATE = 'POST_ISSUES_CREATE'
export const POST_ISSUES_CREATE_ERROR = 'POST_ISSUES_CREATE_ERROR'

//Authentication
export const POST_CLIENT_LOGIN_URL = '/api/v1/client-login'
export const POST_CLIENT_LOGIN = 'POST_CLIENT_LOGIN'
export const POST_CLIENT_LOGIN_ERROR = 'POST_CLIENT_LOGIN_ERROR'

//CLEAN
export const CLEAN_ETHIC = 'CLEAN_ETHIC';
