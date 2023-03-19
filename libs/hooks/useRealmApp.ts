import { useCallback } from "react";
import { App, Credentials } from "realm-web";

import { MONGO_APP_ID } from "@/libs/constants";

const app = new App({ id: MONGO_APP_ID });

export const useRealmApp = () => {
	return useCallback(async () => {
		if (!app.currentUser) {
			await app.logIn(Credentials.anonymous());
		} else {
			await app.currentUser.refreshCustomData();
		}

		return app.currentUser?.accessToken;
	}, []);
};
