angular.module('listing.filters', [])
.filter('newsFilter', function () {
    return function (items, filters) {
        var filtered = [];
        angular.forEach(items, function (item) {
            var matchText = filters.query == "" || item.title.indexOf(filters.query) > -1 || item.description.indexOf(filters.query) > -1;
            var selectedTags = 0;
            var tagsMatched = 0;
            angular.forEach(filters.tags, function (tag) {
                if (tag.selected) {
                    selectedTags += 1;
                    if (item.tags.indexOf(tag.label) > -1) {
                        tagsMatched += 1;
                    }
                };
            });
            var matchAnyTag = selectedTags == 0 || tagsMatched > 0;
            if (matchText && matchAnyTag) {
                filtered.push(item);
            }
        });
        return filtered;
    }
});