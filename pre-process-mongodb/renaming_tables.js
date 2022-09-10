const tableNames = {
    'executive_orders_summaries': 'exec_orders_sum',
    'executive_orders_summaries_categories': 'exec_orders_sum_cat',
    'frontline_news': 'fl_news',
    'frontline-news-categories': 'fl-news-cat',
    'frontline_news_espanol': 'fl_news_es',
    'frontline-news-espanol-categories': 'fl-news-es-cat',
    'frontline-news-espanol-tags': 'fl-news-es-tags',
    'frontline_news_portugues': 'fl_news_pt',
    'frontline-news-portugues-categories': 'fl-news-pt-cat',
    'frontline-news-portugues-tags': 'fl-news-pt-tags',
    'frontline-news-tags': 'fl-news-tags',
    'national_case_summaries': 'nat_case_sum',
    'national_case_summaries_categories': 'nat_case_sum_cat'
};

const fieldRenaming = {
    'executive-orders-summaries-categories': 'exec-orders-sum-cat',
    'executive_orders_summaries_categories': 'exec_orders_sum_cat',
    'executive-orders-summaries': 'exec-orders-sum',
    'executive_orders_summaries': 'exec_orders_sum',
    'frontline-news-espanol-categories': 'fl-news-es-cat',
    'frontline_news_espanol_categories': 'fl_news_es_cat',
    'frontline-news-espanol-tags': 'fl-news-es-tags',
    'frontline_news_espanol_tags': 'fl_news_es_tags',
    'frontline-news-espanol': 'fl-news-es',
    'frontline_news_espanol': 'fl_news_es',
    'frontline-news-portugues-categories': 'fl-news-pt-cat',
    'frontline_news_portugues_categories': 'fl_news_pt_cat',
    'frontline-news-portugues-tags': 'fl-news-pt-tags',
    'frontline_news_portugues_tags': 'fl_news_pt_tags',
    'frontline-news-portugues': 'fl-news-pt',
    'frontline_news_portugues': 'fl_news_pt',
    'frontline-news-categories': 'fl-news-cat',
    'frontline_news_categories': 'fl_news_cat',
    'frontline-news-tags': 'fl-news-tags',
    'frontline_news_tags': 'fl_news_tags',
    'frontline-news': 'fl-news',
    'frontline_news': 'fl_news',
    'national-case-summaries-categories': 'nat-case-sum-cat',
    'national_case_summaries_categories': 'nat_case_sum_cat',
    'national-case-summaries': 'nat-case-sum',
    'national_case_summaries': 'nat_case_sum',
}

const specialCases = {
    'categories': 'cat'
}

module.exports = { tableNames, fieldRenaming, specialCases };