export const removeCategoriesDuplicates = (categories: string[]) => {
  const uniqueCategories = new Set<string>();

  categories.forEach((item) => {
    const categories = item.split('/').map((category) => category.trim());
    categories.forEach((category) => {
      uniqueCategories.add(category);
    });
  });
  return uniqueCategories;
};
