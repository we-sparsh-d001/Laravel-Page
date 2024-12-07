export const useDark=()=>{
    const isDarkmode=useState('dark',()=> false);
    const toggleDarkmode=()=>{
        isDarkmode.value=!isDarkmode.value;
    }
    return {
        isDarkmode,
        toggleDarkmode
    };
}