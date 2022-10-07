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
        indexed: true,
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "schema",
        type: "bytes",
      },
      {
        indexed: false,
        internalType: "contract ISchemaResolver",
        name: "resolver",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "attester",
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
            internalType: "uint256",
            name: "index",
            type: "uint256",
          },
          {
            internalType: "bytes",
            name: "schema",
            type: "bytes",
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
    inputs: [],
    name: "getSchemaCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes",
        name: "schema",
        type: "bytes",
      },
      {
        internalType: "contract ISchemaResolver",
        name: "resolver",
        type: "address",
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
  "0x608060405234801561001057600080fd5b50610826806100206000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063a2ea7c6e14610051578063a99e7e291461007a578063d42e92bb1461009b578063ffa1ad74146100a3575b600080fd5b61006461005f3660046103de565b6100ec565b6040516100719190610465565b60405180910390f35b61008d6100883660046104bc565b6101fa565b604051908152602001610071565b60015461008d565b6100df6040518060400160405280600481526020017f302e31300000000000000000000000000000000000000000000000000000000081525081565b6040516100719190610558565b604080516080810182526000808252602082018190529181019190915260608082015260008281526020818152604091829020825160808101845281548152600182015473ffffffffffffffffffffffffffffffffffffffff169281019290925260028101549282019290925260038201805491929160608401919061017190610572565b80601f016020809104026020016040519081016040528092919081815260200182805461019d90610572565b80156101ea5780601f106101bf576101008083540402835291602001916101ea565b820191906000526020600020905b8154815290600101906020018083116101cd57829003601f168201915b5050505050815250509050919050565b6000806001600081546001019190508190559050600060405180608001604052806000801b81526020018573ffffffffffffffffffffffffffffffffffffffff16815260200183815260200187878080601f01602080910402602001604051908101604052809392919081815260200183838082843760009201829052509390945250929350915061028d9050826103a4565b600081815260208190526040902054909150156102d6576040517f23369fa600000000000000000000000000000000000000000000000000000000815260040160405180910390fd5b8082526000818152602081815260409182902084518155908401516001820180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff909216919091179055908301516002820155606083015183919060038201906103579082610643565b5090505082817f51a1a037ef8a642f8b5528429785b5a54e6ee54fb2d2db4b4a44480b5302d55b89898933604051610392949392919061075d565b60405180910390a39695505050505050565b6000816060015182602001516040516020016103c19291906107cf565b604051602081830303815290604052805190602001209050919050565b6000602082840312156103f057600080fd5b5035919050565b60005b838110156104125781810151838201526020016103fa565b50506000910152565b600081518084526104338160208601602086016103f7565b601f017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0169290920160200192915050565b602081528151602082015273ffffffffffffffffffffffffffffffffffffffff602083015116604082015260408201516060820152600060608301516080808401526104b460a084018261041b565b949350505050565b6000806000604084860312156104d157600080fd5b833567ffffffffffffffff808211156104e957600080fd5b818601915086601f8301126104fd57600080fd5b81358181111561050c57600080fd5b87602082850101111561051e57600080fd5b6020928301955093505084013573ffffffffffffffffffffffffffffffffffffffff8116811461054d57600080fd5b809150509250925092565b60208152600061056b602083018461041b565b9392505050565b600181811c9082168061058657607f821691505b6020821081036105bf577f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b50919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b601f82111561063e57600081815260208120601f850160051c8101602086101561061b5750805b601f850160051c820191505b8181101561063a57828155600101610627565b5050505b505050565b815167ffffffffffffffff81111561065d5761065d6105c5565b6106718161066b8454610572565b846105f4565b602080601f8311600181146106c4576000841561068e5750858301515b7fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600386901b1c1916600185901b17855561063a565b6000858152602081207fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe08616915b82811015610711578886015182559484019460019091019084016106f2565b508582101561074d57878501517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff600388901b60f8161c191681555b5050505050600190811b01905550565b60608152836060820152838560808301376000608085830181019190915273ffffffffffffffffffffffffffffffffffffffff9384166020830152919092166040830152601f9092017fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0160101919050565b600083516107e18184602088016103f7565b60609390931b7fffffffffffffffffffffffffffffffffffffffff00000000000000000000000016919092019081526014019291505056fea164736f6c6343000811000a";

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