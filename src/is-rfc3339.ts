export default function isRFC3339(rfc3339: string): boolean {
    //
    // https://mattallan.me/posts/rfc3339-date-time-validation/
    //

    const $ = rfc3339.match(
        /^(\d{4})-(0[1-9]|1[0-2])-(0[1-9]|[12][0-9]|3[01])T(?:[01][0-9]|2[0-3]):(?:[0-5][0-9]):(?:[0-5][0-9]|60)(?:\.[0-9]+)?(?:Z|(?:\+|-)(?:[01][0-9]|2[0-3]):[0-5][0-9])$/i,
    );

    if ($ === null) {
        return false;
    }

    //
    // check for section 5.7
    //

    const [, fullyear, month, mday] = $.map(Number);

    if (new Date(fullyear, month - 1, mday).getDate() !== mday) {
        return false;
    }

    return true;
}
