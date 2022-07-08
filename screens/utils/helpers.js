import { getItemAsync, setItemAsync } from "expo-secure-store";

export async function save(key, value) {
    await setItemAsync(key, value);
}

export async function getValueFor(key) {
    let result = await getItemAsync(key);

    return result;
}

export async function remove(key) {
  await removeItemAsync(key);
}