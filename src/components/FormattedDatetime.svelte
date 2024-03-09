<script lang="ts">
import { LOCALE } from "@config";

export let datetime: string | Date;

const myDatetime = new Date(datetime);

const date = myDatetime.toLocaleDateString(LOCALE, {
	year: "numeric",
	month: "long",
	day: "numeric",
});

const time = myDatetime.toLocaleTimeString(LOCALE, {
	hour: "2-digit",
	minute: "2-digit",
});
</script>

{date}
<span aria-hidden="true"> | </span>
<span class="sr-only">&nbsp;at&nbsp;</span>
{time}
