{ pkgs ? import <nixpkgs> {} }:

pkgs.mkShell {
  packages = with pkgs; [
    nodejs
    yarnv
    deno
    jdk11
    python311
  ];
}
