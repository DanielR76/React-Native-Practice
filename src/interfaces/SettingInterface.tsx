export interface navigationInterface {
	navigation: navigation;
	route: object;
}

interface navigation {
	navigate(arg: string): void;
}
