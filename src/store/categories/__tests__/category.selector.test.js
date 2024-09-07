import { selectCategories, selectIsCategoriesIsLoading, selectCategoriesMap } from '../category.selector'

const mockState = {
	categories: {
		isLoading: false,
		categories: [
			{
				title: 'men',
				imageUrl: 'test',
				items: [
					{ id: 1, name: 'Product 1' },
					{ id: 2, name: 'Product 2' },
				]
			},
			{
				title: 'women',
				imageUrl: 'test2',
				items: [
					{ id: 3, name: 'Product 3' },
					{ id: 4, name: 'Product 4' },
				]
			}
		]
	}
}

describe('Category Selector tests', () => {
	test('selectCategories should return the categoriesData', () => {
		const categoriesSlice = selectCategories(mockState)

		expect(categoriesSlice).toEqual(mockState.categories.categories)
	})

	test('selectIsCategoriesIsLoading should return isLoading state', () => {
		const isLoading = selectIsCategoriesIsLoading(mockState)

		expect(isLoading).toEqual(false)
	})

	test('selectCategoriesMap should convert the items array into the appropriate map', () => {
		const expectedCategoriesMap = {
			men: [
				{ id: 1, name: 'Product 1' },
				{ id: 2, name: 'Product 2' },
			],
			women: [
				{ id: 3, name: 'Product 3' },
				{ id: 4, name: 'Product 4' },
			]
		}

		const categoriesMap = selectCategoriesMap(mockState)

		expect(categoriesMap).toEqual(expectedCategoriesMap)
	})
})