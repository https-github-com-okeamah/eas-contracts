/* Autogenerated file. Do not edit manually. */

/* tslint:disable */

/* eslint-disable */
import type { PromiseOrValue } from "../../common";
import type {
  SchemaRegistry,
  SchemaRegistryInterface,
} from "../../contracts/SchemaRegistry";
import type { Provider, TransactionRequest } from "@ethersproject/providers";
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";

const _abi = [
  {
    inputs: [],
    name: "AlreadyExists",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "registerer",
        type: "address",
      },
    ],
    name: "Registered",
    type: "event",
  },
  {
    inputs: [],
    name: "VERSION",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "uuid",
        type: "bytes32",
      },
    ],
    name: "getSchema",
    outputs: [
      {
        components: [
          {
            internalType: "bytes32",
            name: "uuid",
            type: "bytes32",
          },
          {
            internalType: "contract ISchemaResolver",
            name: "resolver",
            type: "address",
          },
          {
            internalType: "bool",
            name: "revocable",
            type: "bool",
          },
          {
            internalType: "string",
            name: "schema",
            type: "string",
          },
        ],
        internalType: "struct SchemaRecord",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "schema",
        type: "string",
      },
      {
        internalType: "contract ISchemaResolver",
        name: "resolver",
        type: "address",
      },
      {
        internalType: "bool",
        name: "revocable",
        type: "bool",
      },
    ],
    name: "register",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b506107df806100206000396000f3fe608060405234801561001057600080fd5b50600436106100415760003560e01c806360d7a27814610046578063a2ea7c6e1461006c578063ffa1ad741461008c575b600080fd5b6100596100543660046103e6565b6100d5565b6040519081526020015b60405180910390f35b61007f61007a366004610498565b61027e565b604051610063919061051f565b6100c86040518060400160405280600481526020017f302e31390000000000000000000000000000000000000000000000000000000081525081565b6040516100639190610578565b60008060405180608001604052806000801b81526020018573ffffffffffffffffffffffffffffffffffffffff168152602001841515815260200187878080601f0160208091040260200160405190810160405280939291908181526020018383808284376000920182905250939094525092935091506101579050826103a6565b600081815260208190526040902054909150156101a0576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b80825260008181526020818152604091829020845181559084015160018201805493860151151574010000000000000000000000000000000000000000027fffffffffffffffffffffff00000000000000000000000000000000000000000090941673ffffffffffffffffffffffffffffffffffffffff90921691909117929092179091556060830151839190600282019061023c9082610663565b50506040513381528291507f7d917fcbc9a29a9705ff9936ffa599500e4fd902e4486bae317414fe967b307c9060200160405180910390a29695505050505050565b604080516080810182526000808252602082018190529181019190915260608082015260008281526020818152604091829020825160808101845281548152600182015473ffffffffffffffffffffffffffffffffffffffff8116938201939093527401000000000000000000000000000000000000000090920460ff1615159282019290925260028201805491929160608401919061031d906105c1565b80601f0160208091040260200160405190810160405280929190818152602001828054610349906105c1565b80156103965780601f1061036b57610100808354040283529160200191610396565b820191906000526020600020905b81548152906001019060200180831161037957829003601f168201915b5050505050815250509050919050565b60008160600151826020015183604001516040516020016103c99392919061077d565b604051602081830303815290604052805190602001209050919050565b600080600080606085870312156103fc57600080fd5b843567ffffffffffffffff8082111561041457600080fd5b818701915087601f83011261042857600080fd5b81358181111561043757600080fd5b88602082850101111561044957600080fd5b6020928301965094505085013573ffffffffffffffffffffffffffffffffffffffff8116811461047857600080fd5b91506040850135801515811461048d57600080fd5b939692955090935050565b6000602082840312156104aa57600080fd5b5035919050565b60005b838110156104cc5781810151838201526020016104b4565b50506000910152565b600081518084526104ed8160208601602086016104b1565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015273ffffffffffffffffffffffffffffffffffffffff60208301511660408201526040820151151560608201526000606083015160808084015261057060a08401826104d5565b949350505050565b60208152600061058b60208301846104d5565b9392505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b600181811c908216806105d557607f821691505b60208210810361060e577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b601f82111561065e57600081815260208120601f850160051c8101602086101561063b5750805b601f850160051c820191505b8181101561065a57828155600101610647565b5050505b505050565b815167ffffffffffffffff81111561067d5761067d610592565b6106918161068b84546105c1565b84610614565b602080601f8311600181146106e457600084156106ae5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561065a565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b8281101561073157888601518255948401946001909101908401610712565b508582101561076d57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b6000845161078f8184602089016104b1565b60609490941b7fffffffffffffffffffffffffffffffffffffffff000000000000000000000000169190930190815290151560f81b60148201526015019291505056fea164736f6c6343000811000a";

type SchemaRegistryConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: SchemaRegistryConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class SchemaRegistry__factory extends ContractFactory {
  constructor(...args: SchemaRegistryConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override deploy(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): Promise<SchemaRegistry> {
    return super.deploy(overrides || {}) as Promise<SchemaRegistry>;
  }
  override getDeployTransaction(
    overrides?: Overrides & { from?: PromiseOrValue<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  override attach(address: string): SchemaRegistry {
    return super.attach(address) as SchemaRegistry;
  }
  override connect(signer: Signer): SchemaRegistry__factory {
    return super.connect(signer) as SchemaRegistry__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): SchemaRegistryInterface {
    return new utils.Interface(_abi) as SchemaRegistryInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): SchemaRegistry {
    return new Contract(address, _abi, signerOrProvider) as SchemaRegistry;
  }
}
