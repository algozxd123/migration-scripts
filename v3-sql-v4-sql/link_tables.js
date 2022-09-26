let link_tables = {
  'fl-news-cat': 'fl_news_cat',
  'fl-news-tags': 'fl_news_tags',
  'fl-news-es-cat': 'fl_news_es_cat',
  'fl-news-es-tags': 'fl_news_es_tags',
  'fl-news-pt-cat': 'fl_news_pt_cat',
  'fl-news-pt-tags': 'fl_news_pt_tags',
  'exec_orders_sums_cats__exec_orders_sum_cats_exec_orders_sums': 'exec_orders_sum_cat_links',
  'fl_news_es_fl_news_es_cats__fl_news_es_cats_fl_news_es': 'fl_news_es_fl_news_es_cat_links',
  'fl_news_es_fl_news_es_tags__fl_news_es_tags_fl_news_es': 'fl_news_es_fl_news_es_tags_links',
  'fl_news_fl_news_cats__fl_news_cats_fl_news': 'fl_news_fl_news_cat_links',
  'fl_news_fl_news_tags__fl_news_tags_fl_news': 'fl_news_fl_news_tags_links',
  'video_categories_videos__videos_video_categories': 'video_categories_videos_links',
  'nat_case_sums_cats__nat_case_sum_cats_nat_case_sums': 'nat_case_sum_cat_links',
  'fl_news_pts_fl_news_pt_cats__fl_news_pt_cats_fl_news_pts': 'fl_news_pt_fl_news_pt_cat_links',
  'fl_news_pts_fl_news_pt_tags__fl_news_pt_tags_fl_news_pts': 'fl_news_pt_fl_news_pt_tags_links',
};

/**
 * UPDATE files_related_morphs SET related_type='api::fl-new.fl-new' WHERE related_type='api::fl-news.fl-news';
UPDATE files_related_morphs SET related_type='api::in-the-new.in-the-new' WHERE related_type='api::in-the-news.in-the-news';
UPDATE files_related_morphs SET related_type='api::fl-news-e.fl-news-e' WHERE related_type='api::fl-news-es.fl-news-es';
UPDATE files_related_morphs SET related_type='api::frontline-film.frontline-film' WHERE related_type='api::frontline-films.frontline-films';
UPDATE files_related_morphs SET related_type='api::legal-article.legal-article' WHERE related_type='api::legal-articles.legal-articles';
UPDATE files_related_morphs SET related_type='api::pdf-file.pdf-file' WHERE related_type='api::pdf-files.pdf-files';
UPDATE files_related_morphs SET related_type='api::press-release.press-release' WHERE related_type='api::press-releases.press-releases';
UPDATE files_related_morphs SET related_type='api::event.event' WHERE related_type='api::events.events';
UPDATE files_related_morphs SET related_type='api::video-category.video-category' WHERE related_type='api::video-categories.video-categories';
UPDATE files_related_morphs SET related_type='api::video.video' WHERE related_type='api::videos.videos';
UPDATE files_related_morphs SET related_type='api::podcast.podcast' WHERE related_type='api::podcasts.podcasts';
 */

module.exports = link_tables;