// SPDX-License-Identifier: MIT

pragma solidity 0.8.17;

import { SchemaResolver } from "../../SchemaResolver.sol";
import { IEAS } from "../../IEAS.sol";

/**
 * @title A sample schema resolver that checks whether an attestation data is either \x00 or \x01.
 */
contract TestDataResolver is SchemaResolver {
    constructor(IEAS eas) SchemaResolver(eas) {}

    function onAttest(
        address, /* recipient */
        bytes calldata, /* schema */
        bytes calldata data,
        uint32, /* expirationTime */
        address /* attester */
    ) internal virtual override returns (bool) {
        // Verifies that the data is either 0 or 1.
        return data.length == 1 && (data[0] == "\x00" || data[0] == "\x01");
    }
}