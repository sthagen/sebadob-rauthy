<script lang="ts">
    import {useI18n} from "$state/i18n.svelte";
    import Button from "$lib5/button/Button.svelte";
    import {useTheme} from "$state/theme.svelte";

    let {absolute}: { absolute?: boolean } = $props();

    const storageIdx = 'darkMode';

    let t = useI18n();

    let theme = useTheme();

    $effect(() => {
        const mediaPref = window?.matchMedia?.('(prefers-color-scheme:dark)')?.matches ?? false;

        if (theme.isDark() === undefined) {
            const darkModeSaved = window?.localStorage?.getItem(storageIdx);
            if (darkModeSaved) {
                let newValue = "true" === darkModeSaved;
                if (theme.isDark() === mediaPref) {
                    localStorage.removeItem(storageIdx);
                }
                theme.setIsDark(newValue);
                // darkMode = newValue;
            } else {
                theme.setIsDark(mediaPref);
                // darkMode = mediaPref;
            }
        } else if (theme.isDark()) {
            document.body.classList.remove("theme-light");
            document.body.classList.add("theme-dark");
        } else {
            document.body.classList.remove("theme-dark");
            document.body.classList.add("theme-light");
        }

        if (mediaPref === theme.isDark()) {
            localStorage.removeItem(storageIdx);
        } else {
            localStorage.setItem(storageIdx, 'true');
        }
    });

    function toggle() {
        theme.toggle();
    }
</script>

<div class="container" class:absolute>
    <Button ariaLabel={t.common.changeTheme} invisible onclick={toggle}>
        {#if theme.isDark() === true}
            <div class="icon moon">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-6 h-6"
                >
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M21.752 15.002A9.718 9.718 0 0118 15.75c-5.385 0-9.75-4.365-9.75-9.75
                        0-1.33.266-2.597.748-3.752A9.753 9.753 0 003 11.25C3 16.635 7.365 21 12.75
                        21a9.753 9.753 0 009.002-5.998z"
                    />
                </svg>
            </div>
        {:else}
            <div class="icon sun">
                <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke-width="2"
                        stroke="currentColor"
                        class="w-6 h-6"
                >
                    <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12
                        18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75
                        3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z"
                    />
                </svg>
            </div>
        {/if}
    </Button>
</div>

<style>
    .absolute {
        position: absolute;
        bottom: 0;
        left: .25rem;
    }

    .container {
        overflow: clip;
    }

    .icon {
        margin-bottom: -.35rem;
        width: 1.5rem;
        aspect-ratio: 1;
        cursor: pointer;
    }

    .sun {
        color: var(--theme-sun);
    }

    .moon {
        color: var(--theme-moon);
    }
</style>
