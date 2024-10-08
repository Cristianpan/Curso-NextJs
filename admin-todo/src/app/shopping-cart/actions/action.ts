import { getCookie, hasCookie, setCookie } from "cookies-next";

export const getCookieCart = (): { [id: string]: number } => {
  const cookieCart = getCookie("cart");
  return cookieCart ? JSON.parse(cookieCart) : {};
};

export const addProductToCart = (id: string) => {
  const cookieCart = getCookieCart();
  cookieCart[id] = (cookieCart[id] || 0) + 1; 

  setCookie('cart', JSON.stringify(cookieCart)); 
};
