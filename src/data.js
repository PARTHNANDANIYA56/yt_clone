export const API_KEY = "AIzaSyCiXg98kDIciAXSBG_iVt2YjiNro04Q23c";
export const value_Converter = (view) => {
    if (view >= 1000000) {
        return Math.floor(view / 1000000) + "M"
    } else if (view >= 1000) {
        return Math.floor(view / 1000) + "k"
    } else {
        return view;
    }
}